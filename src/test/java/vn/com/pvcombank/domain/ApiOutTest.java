package vn.com.pvcombank.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class ApiOutTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ApiOut.class);
        ApiOut apiOut1 = new ApiOut();
        apiOut1.setId(1L);
        ApiOut apiOut2 = new ApiOut();
        apiOut2.setId(apiOut1.getId());
        assertThat(apiOut1).isEqualTo(apiOut2);
        apiOut2.setId(2L);
        assertThat(apiOut1).isNotEqualTo(apiOut2);
        apiOut1.setId(null);
        assertThat(apiOut1).isNotEqualTo(apiOut2);
    }
}
