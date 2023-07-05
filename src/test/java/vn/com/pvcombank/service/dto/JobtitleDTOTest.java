package vn.com.pvcombank.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import vn.com.pvcombank.web.rest.TestUtil;

class JobtitleDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(JobtitleDTO.class);
        JobtitleDTO jobtitleDTO1 = new JobtitleDTO();
        jobtitleDTO1.setId(1L);
        JobtitleDTO jobtitleDTO2 = new JobtitleDTO();
        assertThat(jobtitleDTO1).isNotEqualTo(jobtitleDTO2);
        jobtitleDTO2.setId(jobtitleDTO1.getId());
        assertThat(jobtitleDTO1).isEqualTo(jobtitleDTO2);
        jobtitleDTO2.setId(2L);
        assertThat(jobtitleDTO1).isNotEqualTo(jobtitleDTO2);
        jobtitleDTO1.setId(null);
        assertThat(jobtitleDTO1).isNotEqualTo(jobtitleDTO2);
    }
}
