package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class JobtitleTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Jobtitle.class);
        Jobtitle jobtitle1 = new Jobtitle();
        jobtitle1.setId(1L);
        Jobtitle jobtitle2 = new Jobtitle();
        jobtitle2.setId(jobtitle1.getId());
        assertThat(jobtitle1).isEqualTo(jobtitle2);
        jobtitle2.setId(2L);
        assertThat(jobtitle1).isNotEqualTo(jobtitle2);
        jobtitle1.setId(null);
        assertThat(jobtitle1).isNotEqualTo(jobtitle2);
    }
}
