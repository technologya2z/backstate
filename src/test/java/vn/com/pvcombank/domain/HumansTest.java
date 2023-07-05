package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class HumansTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Humans.class);
        Humans humans1 = new Humans();
        humans1.setId(1L);
        Humans humans2 = new Humans();
        humans2.setId(humans1.getId());
        assertThat(humans1).isEqualTo(humans2);
        humans2.setId(2L);
        assertThat(humans1).isNotEqualTo(humans2);
        humans1.setId(null);
        assertThat(humans1).isNotEqualTo(humans2);
    }
}
